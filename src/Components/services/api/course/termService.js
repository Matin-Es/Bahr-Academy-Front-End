import Http from "../http-service.api";
import config from "../../../../config.json";

export async function addTerm(obj) {
  try {
    await Http.post(config.api + '/term', obj); 
  } catch (error) {
    
  }
}

// in this case we get all users
// then add all teachers to var teachers(just id and fullName)
// then return it for use them 
export async function getEmployee() {
    var teachers = [];
    let emp;
    try {
      emp = await Http.get(config.api + '/employee/getall');
    } catch (error) {
      emp = [];
      alert('استادی موجود نیست لطفا یک استاد اضافه کنید');
      return window.location = '/cpanel/add-emp';
    }
    
    for(var m=0; m < emp.data.result.length;m++){
      if(emp.data.result[m].salt !== '')
        if(emp.data.result[m].role === 'teacher'){
          const name = emp.data.result[m].fullName;
          const id = emp.data.result[m]._id;
          teachers.push({fullName:name, _id:id});
        }
    }
    return teachers;
}

export async function getTerm(){
  try {
    const result = await Http.get(config.api + '/term/getall');
    const term = result.data.result;
    return term;
  } catch (error) {
    //toast.error('مشکلی در برقراری با سرور ایجاد شده است');
    return [];
  }
}

export async function delTerm(id) {
  try {
    await Http.delete(config.api + '/term/' + id);
  } catch (error) {
    return [];
  }
}

export async function upTerm(obj,id) {
  try {
    await Http.put(config.api + '/term/' + id, obj);
  } catch (error) {
    
  }
}

export default {
    addTerm,
    getEmployee,
    getTerm,
    delTerm,
    upTerm
}
