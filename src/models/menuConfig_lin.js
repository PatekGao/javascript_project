import React from "react";

const menuList = [
  {
    title: '1st_lin',
    key: '/page2/p1',
    to: '/page2/p1',
  },
  {
    title: '2nd_lin',
    key: '/page2/p2',
    to: '/page2/p2',
    children: [
      {
        title: '3rd_lin',
        key: '/page2/p3',
        to: '/page2/p3',
      },
      {
        title: '4th_lin',
        key: '/page2/p4',
        to: '/page2/p4',
      }
    ]
  }
]

export default menuList
