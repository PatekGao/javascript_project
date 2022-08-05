import React from "react";

const menuList = [
  {
    title: '1st_xu',
    key: 'page1/p1',
    to: 'page1/p1',
  },
  {
    title: '2nd_xu',
    key: 'page1/p2',
    to: 'page1/p2',
    children: [
      {
        title: '3rd_xu',
        key: 'page1/p3',
        to: 'page1/p3',
      },
      {
        title: '4th_xu',
        key: 'page1/p4',
        to: 'page1/p4',
      }
    ]
  }
]

export default menuList
