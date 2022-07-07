
let template = `
<div>
    <form id="info" onsubmit="return false">
      <div>
        <label for="employee_id">사원번호</label>
        <input type="number" id="employee_id" name="employee_id">
      </div>
      <div>
        <label for="last_name">성</label>
        <input type="text" id="last_name" name="last_name">
      </div>
      <div>
        <label for="first_name">이름</label>
        <input type="text" id="first_name" name="first_name">
      </div>
      <div>
        <label for="email">이메일</label>
        <input type="email" id="email" name="email">
      </div>
      <div>
        <label for="job_id">직책</label>
        <input type="text" id="job_id" name="job_id">
      </div>
      <div>
        <button type="button" id="insertBtn">등록</button>
        <button type="button" id="updateBtn">수정</button>
        <button type="button" id="deleteBtn">삭제</button>
      </div>
    </form>
  </div>
  <div>
`
export default {
  template: template,
  props: ['emp'],
  data: function () {
    return {

    }
  }
} 
