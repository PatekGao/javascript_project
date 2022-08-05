import React from "react";

const menuList = [
  {
    title: '1st_kong',
    key: 'page4/p1',
    to: 'page4/p1',
  },
  {
    title: '2nd_kong',
    key: '/page4/p2',
    to: '/page4/p2',
    children: [
      {
        title: '3rd_kong',
        key: '/page4/p3',
        to: '/page4/p3',
      },
      {
        title: '4th_kong',
        key: '/page4/p4',
        to: '/page4/p4',
      }
    ]
  }
]

export default menuList
