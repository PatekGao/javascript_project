import React from "react";

const menuList = [
  {
    title: '1st_lin',
    key: '1st_lin',
    to: '/1st_lin',
  },
  {
    title: '2nd_lin',
    key: '2nd_lin',
    to: '/2nd_lin',
    children: [
      {
        title: '3rd_lin',
        key: '3rd_lin',
        to: '/3rd_lin',
      },
      {
        title: '4th_lin',
        key: '4th_lin',
        to: '/4th_lin',
      }
    ]
  }
]

export default menuList
