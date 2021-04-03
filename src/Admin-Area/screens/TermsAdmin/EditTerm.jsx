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
import { toast } from "react-toastify";
import {
    DateTimePicker
} from "react-advance-jalaali-datepicker";
import Term from "../../../Components/services/api/course/termService";
import Course from '../../../Components/services/api/Kourses/courseService';
import { Redirect } from "react-router-dom";
import save from "../../../Components/services/api/Kourses/saveImage";
import axios from "axios";

export default class EditTerm extends Component {

    state = {
        collapse: true,
        fadeIn: true,
        timeout: 300,
        teachers: [],
        courses: [],
        term: this.props.location.term,
        fail: false
    };

    // in this case we get all teachers from api getEmployee for select one of them
    // and again for get all courses
    // we list it in <option></option> for select by admin
    async componentDidMount() {
        this.setFields();
        let employee;
        let course;
        // in this case we get list of teachers and courses if one of them was null then redirect to own page for fill it
        try {
            employee = await Term.getEmployee();
            course = await Course.getCourse();
            this.setState((pre) => ({ teachers: pre.teachers.concat(employee), courses: pre.courses.concat(course) }));
        } catch (error) {
        }
    }

    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    toggleFade = () => {
        this.setState((prevState) => { return { fadeIn: !prevState } });
    }

    setFields = async() => {
        try {
            const id = this.props.match.params._id
            const url = 'http://localhost:3000/api/term/'
            const response = await axios.get(url + id)
            const term = response.data.result;
            document.getElementById('text-input').value = term.title;
            document.getElementById('cost-input').value = term.cost;
            document.getElementById('capacity-input').value = term.capacity;
            document.getElementById('sdate-input').value = term.startDate;
            document.getElementById('fdate-input').value = term.endDate;
            this.setState((pre) => ({ teachers: pre.teachers.concat(term.teacher) }))
            this.setState((pre) => ({ courses: pre.courses.concat(term.course) }))
        } catch (error) {
            this.setState(() => ({ fail: true }))
        }

    }

    handleReset = () => {
        document.getElementById('text-input').value = '';
        document.getElementById('cost-input').value = '';
        document.getElementById('capacity-input').value = '';
        document.getElementById('sdate-input').value = '';
        document.getElementById('fdate-input').value = '';
        document.getElementById('select').value = '';
        document.getElementById('select2').value = '';
    }

    // we get infos and put term (send id and obj witch created by inputs value to termApi)
    handleSave = async () => {
        const id = this.props.match.params._id;
        const title = document.getElementById('text-input').value;
        const cost = document.getElementById('cost-input').value;
        const capacity = document.getElementById('capacity-input').value;
        const startDate = document.getElementById('sdate-input').value;
        const finishDate = document.getElementById('fdate-input').value;
        const teacher = document.getElementById('select').value;
        const doreh = document.getElementById('select2').value;

        if (!title || !cost || !capacity || !startDate || !finishDate) {
            toast.error('لطفا تمام فیلدها را به درستی وارد کنید', { position: toast.POSITION.TOP_LEFT });
        }

        else {
            const obj = {
                "title": title,
                "cost": cost,
                "endDate": finishDate,
                "startDate": startDate,
                "capacity": capacity,
                "teacher": teacher,
                "course": doreh
            }

            // put obj to apiUpdateTerm, if it was true toast success else toast error
            try {
                await Term.upTerm(obj, id);
                toast('با موفقیت ویرایش شد', { position: toast.POSITION.TOP_LEFT });
            } catch (error) {
                toast('nonononono', { position: toast.POSITION.TOP_LEFT });
            }

        }
    }
    // this is just a simple input witch will include to DatePicker for change it to persian
    SDatePickerInput(props) {
        return <Input
            type="date"
            id="sdate-input"
            name="date"
            placeholder="تاریخ"
            {...props}
        />;
    }
    // this is just a simple input witch will include to DatePicker for change it to persian
    FDatePickerInput(props) {
        return <Input
            type="date"
            id="fdate-input"
            name="date"
            placeholder="تاریخ"
            {...props}
        />;
    }

    render() {
        return (
            <div className="animated fadeIn" >
                <Row>
                    <Col xs="12" md="6">
                        <Card>
                            <CardHeader>
                                <strong>ویرایش ترم</strong>
                            </CardHeader>
                            <CardBody>
                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">عنوان ترم</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="name" id="text-input" name="subjectTerm" placeholder="نام" />
                                            <FormText color="muted">لطفا عنوان ترم را وارد کنید</FormText>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="cost-input">هزینه</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="cost-input" name="cost" placeholder="هزینه" autoComplete="cost" />
                                            <FormText className="help-block">لطفا هزینه مورد نظر وارد کنید</FormText>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="capacity-input">ظرفیت</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="name" id="capacity-input" name="capacity" placeholder="ظرفیت" autoComplete="capacity" />
                                            <FormText className="help-block">ظرفیت را وارد کنید</FormText>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="sdate-input">تاریخ شروع</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <DateTimePicker id="sdate-input" inputComponent={this.SDatePickerInput} placeholder="تاریخ شروع" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="fdate-input">تاریخ پایان</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <DateTimePicker id="fdate-input" inputComponent={this.SDatePickerInput} placeholder="تاریخ پایان" />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="select">مدرس</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="select" name="teacher" id="select">
                                                {this.state.teachers.map((o) => (
                                                    <option key={o._id} value={o._id}>{o.fullName}</option>
                                                ))}
                                            </Input>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="select2">دوره</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="select" name="doreh" id="select2">
                                                {this.state.courses.map((o) => (
                                                    <option key={o._id} value={o._id}>{o.courseName}</option>
                                                ))}
                                            </Input>
                                        </Col>
                                    </FormGroup>

                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button onClick={this.handleSave} type="submit" size="md" color="success"><i className="fa fa-dot-circle-o"></i> ویرایش</Button>
                                <Button onClick={this.handleReset} type="reset" size="md" color="danger"><i className="fa fa-ban"></i> ریست</Button>
                            </CardFooter>
                        </Card>
                    </Col>

                </Row>
                {this.state.fail && <Redirect to="/copanel/terms" />}
            </div>
        );
    }
}
