export const ACCOUNT_TYPE = {
  ADMIN: 'ACCOUNT_TYPE_ADMIN',
  STUDENT: 'ACCOUNT_TYPE_STUDENT',
  TEACHER: 'ACCOUNT_TYPE_TEACHER',
}
export const STUDENT_COLUMNS = [
  {
    Header: 'Student ID',
    accessor: 'studentID',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Phone Number',
    accessor: 'contact',
  },
  {
    Header: 'Email ID',
    accessor: 'email',
  },
  {
    Header: 'Address',
    accessor: 'address',
  },
  {
    Header: 'Module ID',
    accessor: 'moduleID',
  },
]

export const TUTOR_COLUMNS = [
  {
    Header: 'Tutor ID',
    accessor: 'tutorID',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Phone Number',
    accessor: 'contact',
  },
  {
    Header: 'Email ID',
    accessor: 'email',
  },
  {
    Header: 'Address',
    accessor: 'address',
  },
]

export const COURSE_COLUMNS = [
  {
    Header: 'Course ID',
    accessor: 'courseID',
  },
  {
    Header: 'Course Name',
    accessor: 'courseName',
  },
  {
    Header: 'Tutor ID',
    accessor: 'tutorID',
  },
  {
    Header: 'Module ID',
    accessor: 'moduleID',
  },
]
export const USER_COLUMNS = [
  {
    Header: 'User ID',
    accessor: 'uuid',
  },
  {
    Header: 'Username',
    accessor: 'username',
  },
  {
    Header: 'Account Type',
    accessor: 'type',
  },
]

export const REQUEST_METHODS = {
  GET: 'GET',
  POST: 'POST',
}
