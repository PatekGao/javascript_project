import React from "react";

const menuList = [
  {
    title: '1st_xu',
    key: '1st_xu',
    to: '/1st_xu',
  },
  {
    title: '2nd_xu',
    key: '2nd_xu',
    to: '/2nd_xu',
    children: [
      {
        title: '3rd_xu',
        key: '3rd_xu',
        to: '/3rd_xu',
      },
      {
        title: '4th_xu',
        key: '4th_xu',
        to: '/4th_xu',
      }
    ]
  }
]

export default menuList
