import styled from "styled-components"

const Announcement = styled.div`
   height: 45px;
   background-color :#D9A299 ;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 20px;
   font-weight: 500;
   color: white;
`

export default function Announcements() {
  return (
    <Announcement>Free Shipping on Orders above 1500Pkr !</Announcement>
  )
}
