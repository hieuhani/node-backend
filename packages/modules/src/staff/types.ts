export default `
type GroupStaff {
  group: Group
}

type Staff {
  id: ID
  partner: Partner
  groupStaffs: [GroupStaff]
}

type StaffQuery {
  """Working partners information and staff details"""
  iAmStaffs: [Staff]
}
`
