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
  FormText,
  Input,
  Label,
  Row
} from "reactstrap";
import { toast } from "react-toastify";
import newsService from "../../../Components/services/api/News/newsService";
import { Redirect } from "react-router-dom";
import save from "../../../Components/services/api/Kourses/saveImage";

import axios from "axios";

let aks = "";
export default class EditNews extends Component {

  state = {
    collapse: true,
    fadeIn: true,
    timeout: 300,
    news: this.props.location.news,
    fail:false
  };

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  toggleFade = () => {
    this.setState(prevState => {
      return { fadeIn: !prevState };
    });
  };

  // run setField for fill inputs
  async componentDidMount() {
    this.setFields();
  }

  // fill inputs by news in state
  setFields =  async() => {
    try {
      const id = this.props.match.params._id
      const url = 'http://localhost:3000/api/news/'
      const response = await axios.get(url + id)
      const news = response.data.result;
      document.getElementById('news-title').value = news.title;
      document.getElementById('esp-input').value = news.text;
      document.getElementById('select').value = news.category;
      aks = news.image;
    } catch (error) {
      this.setState(() => ({ fail:true }))
    }
  }

  // empty inputs
  handleReset = () => {
    try {
      document.getElementById('news-title').value = '';
    } catch (error) {
    }
    try {
      document.getElementById('esp-input').value = '';
    } catch (error) {
      
    }    
  }

  // save image
  SaveImage =  (file) => {
    const data = new FormData() 
    data.append('file', file)
    save.SaveImage(data);
  }

  // update special news by id and object witch created by inputs value
  handleSave = async () => {
    const id = this.props.match.params._id;
    const news = this.props.match.params._id;
    const title = document.getElementById('news-title').value;
    const text = document.getElementById('esp-input').value;
    const category = document.getElementById('select').value;
    // const file = document.querySelector('#file-input').files[0];
    let image = aks;
    // if(file === undefined) {
    //   image = news.image
    // }
    // else if(!file.type.includes("image") && file !== undefined) return toast.error('لطفا عکس درست انتخاب کنید',{position:toast.POSITION.TOP_LEFT})
    // if(!title || !text || !category) return toast.error('تمامی فیلدها را پر کنید!!',{position:toast.POSITION.TOP_LEFT});
    // else{ this.SaveImage(file); image = file.name }

    const obj={
      "title":title,
      "text":text,
      "category":category,
      "image":image
    }

     // put obj to apiUpdateNews, if it was true toast success else toast error
     try {
      await newsService.updateNews(obj,id);
      toast('با موفقیت ویرایش شد',{position:toast.POSITION.TOP_LEFT});
    } catch (error) {
      console.log(error)
      toast.error('nonononono',{position:toast.POSITION.TOP_LEFT});
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
          <Row>
            <Col xs="12" md="6">
              <Card>
                <CardHeader>
                  <strong>ویرایش خبر</strong>
                </CardHeader>
                <CardBody>
                  <Form
                    action=""
                    method="post"
                    encType="multipart/form-data"
                    className="form-horizontal">
                    
                    <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">عنوان خبر</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="news-title" name="newsTitle" placeholder=" عنوان خبر" required />
                      <FormText color="muted">لطفا عنوان را وارد کنید</FormText>
                    </Col>
                  </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="esp-input">متن خبر</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input
                          required
                          type="textarea"
                          rows="9"
                          id="esp-input"
                          name="description"
                          placeholder="متن خبر"
                          autoComplete="description"
                        />
                        <FormText className="help-block">
                          لطفا متن خبر خود را وارد کنید
                        </FormText>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="select">دسته بندی</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="faction" id="select" >
                          <option value="خبر">خبر</option>
                          <option value="مقاله">مقاله</option>
                        </Input>
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
                  <Button onClick={this.handleSave} type="submit" size="md" color="success">
                    <i className="fa fa-dot-circle-o"></i> ویرایش
                  </Button>
                  <Button onClick={this.handleReset} type="reset" size="md" color="danger">
                    <i className="fa fa-ban"></i> ریست
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          {this.state.fail && <Redirect to="/copanel/news" />}
      </div>
    );
  }
}
