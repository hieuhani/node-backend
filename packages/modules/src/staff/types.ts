export default `
type GroupStaff {
  group: Group
}

type Staff {
  id: ID
  partner: Partner
  groupStaffs: [GroupStaff]
}
`
