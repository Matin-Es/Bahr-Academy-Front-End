import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  InputGroup,
  FormText,
  Input,
  InputGroupAddon,
  Label,
  Row,
} from 'reactstrap';
import {toast } from "react-toastify";
import Course from '../../../Components/services/api/Kourses/courseService';
import { Redirect } from "react-router-dom";
import save from "../../../Components/services/api/Kourses/saveImage";
import axios from "axios";

export default class EditCourse extends Component {


  state = {
    collapse: true,
    fadeIn: true,
    topics:[],
    course:{}, // get course prop from location because we send prop by Link
    timeout: 300,
    fail:false
  };

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade = () => {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  componentDidMount() {
    this.setFields();
  }

  // fill all inputs by course array
  setFields =async() => {
    try {
      const id = this.props.match.params._id
      const url = 'http://localhost:3000/api/course/'
      const response = await axios.get(url+id)
      const course = response.data.result;
      document.getElementById('text-input').value = course.courseName;
      document.getElementById('esp-input').value = course.description;
      this.setState(() => ({ course: course }))
      console.log(response)
    } catch (error) {
      this.setState(() => ({fail:true}))
      console.log(error);
    }
  }

  //add a value to topic array
  AddTopic = () => {
    const topics = document.getElementById('appendedInputButton').value;
    this.setState((o) => ({ topics: o.topics.concat(topics) }))
    document.getElementById('appendedInputButton').value = '';
  }

  // empty all inputs
  handleReset = () => {
    try {
      document.getElementById('text-input').value = '';
    } catch (error) {
    }
    try {
      document.getElementById('appendedInputButton').value = '';
      this.setState(() => ({topics: []}))
    } catch (error) {
    }
    try {
      document.getElementById('esp-input').value = '';
    } catch (error) {
    }
    this.setState(() => ({topics:[]}))
  }

   // save image
  SaveImage =  (file) => {
    const data = new FormData() 
    data.append('file', file)
    save.SaveImage(data);
  }

  // create an object with inputs value and send it to courseApi for update
  handleAdd = async () => {
    const courseName = document.getElementById('text-input').value;
    const description = document.getElementById('esp-input').value;
    const file = document.querySelector('#file-input').files[0];
    let image = '';
    if (!courseName || !description || this.state.topics.length === 0) return toast.error('لطفا تمامی فیلدها را پر کنید',{position:toast.POSITION.TOP_LEFT})
    if(file === undefined) {
      image = this.state.course.image
    }
    else if(!file.type.includes("image") && file !== undefined) return toast.error('لطفا عکس درست انتخاب کنید',{position:toast.POSITION.TOP_LEFT})
    else{ this.SaveImage(file); image = file.name }
    
    const obj={
      "courseName":courseName,
      "topics":this.state.topics,
      "description":description,
      "image":image
    }

     // post obj to apiUpdateCourse, if it was true toast success else toast error
     try {
      await Course.upCourse(obj,this.state.course._id);
      toast('با موفقیت ثبت شد',{position:toast.POSITION.TOP_LEFT});
    } catch (error) {
      console.log(error)
      toast('nonononono',{position:toast.POSITION.TOP_LEFT});
    }


  }

  render() {
    return (
      <div className="animated fadeIn" >
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>افزودن دوره</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">نام دوره</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="name" id="text-input" name="courseName" placeholder="نام دوره" />
                      <FormText color="muted">لطفا نام دوره را وارد کنید</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="esp-input">توضیحات</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" rows="9" id="esp-input" name="description" placeholder="توضیحات" autoComplete="description"/>
                      <FormText className="help-block">لطفا توضیحات خود را وارد کنید</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="appendedInputButton">سرفصل ها</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <div className="controls">
                            <InputGroup>
                              <Input id="appendedInputButton" size="16" type="text" name="add-title" placeholder="سرفصل" />
                              <InputGroupAddon addonType="append">
                                <Button onClick={this.AddTopic} color="secondary">افزودن</Button>
                              </InputGroupAddon>
                            </InputGroup>
                            {this.state.topics.length !== 0 ? 
                              this.state.topics.map((o,index) => (
                                <p key={index} className="alert" 
                                style={{padding:'7px',margin:'10px 0 0px 5px',backgroundColor:'#5b6369',
                                color:'#fff',display:'inline-block'}}>{o}</p>
                              )):<FormText className="help-block">سرفصل مورد نظر را وارد کنید</FormText>}
                          </div>
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="file-input">تصویر</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="file" id="file-input" name="image" />
                      </Col>
                    </FormGroup>
                </Form>
              </CardBody>
              <CardFooter>
                <Button onClick={this.handleAdd} type="submit" size="md" color="success"><i className="fa fa-dot-circle-o"></i> ویرایش</Button>
                <Button onClick={this.handleReset} type="reset" size="md" color="danger"><i className="fa fa-ban"></i> ریست</Button>
              </CardFooter>
            </Card>
            </Col>
        </Row>
        {this.state.fail && <Redirect to="/copanel/courses" />}
      </div>
    );
  }
}
