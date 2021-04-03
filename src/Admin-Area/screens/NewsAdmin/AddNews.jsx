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
import newsService from "../../core/services/newsService";
import save from "../../core/services/saveImage";

export default class AddNews extends Component {

  state = {
    collapse: true,
    fadeIn: true,
    timeout: 300
  };

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  toggleFade = () => {
    this.setState(prevState => {
      return { fadeIn: !prevState };
    });
  };

  // empty all inputs
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

  // add new News to back by send obj witch created by inputs value 
  handleAdd = async () => {
    const title = document.getElementById('news-title').value;
    const text = document.getElementById('esp-input').value;
    const category = document.getElementById('select').value;
    const file = document.querySelector('#file-input').files[0];
    if(file === undefined) return toast.error('لطفا عکس دوره را انتخاب کنید',{position:toast.POSITION.TOP_LEFT})
    if(!file.type.includes("image")) return toast.error('لطفا عکس درست انتخاب کنید',{position:toast.POSITION.TOP_LEFT})
    if(!title || !text || !category) return toast.error('تمامی فیلدها را پر کنید!!',{position:toast.POSITION.TOP_LEFT});
    this.SaveImage(file); // save images

   const obj={
      "title":title,
      "text":text,
      "category":category,
      "image":file.name
    }

     // post obj to apiCreateNews, if it was true toast success else toast error
     try {
      await newsService.setNews(obj);
      toast('با موفقیت ثبت شد',{position:toast.POSITION.TOP_LEFT});
    } catch (error) {
      console.log(error)
      toast.error('nonononono',{position:toast.POSITION.TOP_LEFT});
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
          <Row>
            <Col xs="12" md="9">
              <Card>
                <CardHeader>
                  <strong>افزودن خبر</strong>
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
                  <Button onClick={this.handleAdd} type="submit" size="md" color="primary">
                    <i className="fa fa-dot-circle-o"></i> ثبت
                  </Button>
                  <Button onClick={this.handleReset} type="reset" size="md" color="danger">
                    <i className="fa fa-ban"></i> ریست
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
      </div>
    );
  }
}
