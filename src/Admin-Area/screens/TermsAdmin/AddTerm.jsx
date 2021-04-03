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
} from "reactstrap";
import { toast } from "react-toastify";
import Course from "../../../Components/services/api/Kourses/courseService";
import save from "../../../Components/services/api/Kourses/saveImage";

export default class AddCourse extends Component {
  state = {
    collapse: true,
    fadeIn: true,
    topics: [],
    image: "",
    timeout: 300,
  };

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  toggleFade = () => {
    this.setState((prevState) => {
      return { fadeIn: !prevState };
    });
  };

  //add a value to array
  AddTopic = () => {
    const topics = document.getElementById("appendedInputButton").value;
    this.setState((o) => ({ topics: o.topics.concat(topics) }));
    document.getElementById("appendedInputButton").value = "";
  };

  // empty all inputs
  handleReset = () => {
    try {
      document.getElementById("text-input").value = "";
    } catch (error) {}
    try {
      document.getElementById("appendedInputButton").value = "";
    } catch (error) {}
    try {
      document.getElementById("esp-input").value = "";
    } catch (error) {}
    this.setState(() => ({ topics: [] }));
  };

  // save image
  SaveImage = (file) => {
    const data = new FormData();
    data.append("file", file);
    save.SaveImage(data);
  };

  // add new course to back(by post obj witch created by inputs value to Course Api)
  handleAdd = async () => {
    const courseName = document.getElementById("text-input").value;
    const description = document.getElementById("esp-input").value;
    const file = document.querySelector("#file-input").files[0];
    if (file === undefined)
      return toast.error("لطفا عکس دوره را انتخاب کنید", {
        position: toast.POSITION.TOP_LEFT,
      });
    if (!file.type.includes("image"))
      return toast.error("لطفا عکس درست انتخاب کنید", {
        position: toast.POSITION.TOP_LEFT,
      });
    if (!courseName || !description || this.state.topics.length === 0)
      return toast.error("لطفا تمامی فیلدها را پر کنید", {
        position: toast.POSITION.TOP_LEFT,
      });
    this.SaveImage(file); // save image

    const obj = {
      courseName: courseName,
      topics: this.state.topics,
      description: description,
      image: file.name,
    };

    // post obj to apiCreateCourse, if it was true toast success else toast error
    try {
      await Course.AddCourse(obj);
      toast("با موفقیت ثبت شد", { position: toast.POSITION.TOP_LEFT });
    } catch (error) {
      console.log(error);
      toast("ثبت نشد!", { position: toast.POSITION.TOP_LEFT });
    }
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="9">
            <Card>
              <CardHeader>
                <strong>اضافه کردن دوره</strong>
              </CardHeader>
              <CardBody>
                <Form
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">نام دوره</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="name"
                        id="text-input"
                        name="courseName"
                        placeholder="نام دوره"
                      />
                      <FormText color="muted">
                        لطفا نام دوره را وارد کنید
                      </FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="esp-input">توضیحات</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="textarea"
                        rows="9"
                        id="esp-input"
                        name="description"
                        placeholder="توضیحات"
                        autoComplete="description"
                      />
                      <FormText className="help-block">
                        لطفا توضیحات خود را وارد کنید
                      </FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="appendedInputButton">سرفصل ها</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <div className="controls">
                        <InputGroup>
                          <Input
                            id="appendedInputButton"
                            size="16"
                            type="text"
                            name="add-title"
                            placeholder="سرفصل"
                          />
                          <InputGroupAddon addonType="append">
                            <Button onClick={this.AddTopic} color="secondary">
                              افزودن
                            </Button>
                          </InputGroupAddon>
                        </InputGroup>
                        {this.state.topics.length !== 0 ? (
                          this.state.topics.map((o, index) => (
                            <p
                              key={index}
                              className="alert"
                              style={{
                                padding: "7px",
                                margin: "10px 0 0px 5px",
                                backgroundColor: "#5b6369",
                                color: "#fff",
                                display: "inline-block",
                              }}
                            >
                              {o}
                            </p>
                          ))
                        ) : (
                          <FormText className="help-block">
                            سرفصل مورد نظر را وارد کنید
                          </FormText>
                        )}
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
                <Button
                  onClick={this.handleAdd}
                  type="submit"
                  size="md"
                  color="success"
                >
                  <i className="fa fa-dot-circle-o"></i> ثبت
                </Button>
                <Button
                  onClick={this.handleReset}
                  type="reset"
                  size="md"
                  color="danger"
                >
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
