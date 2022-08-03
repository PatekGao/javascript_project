import React from "react";

const menuList = [
  {
    title: '1st_kong',
    key: '1st_kong',
    to: '/1st_kong',
  },
  {
    title: '2nd_kong',
    key: '2nd_kong',
    to: '/2nd_kong',
    children: [
      {
        title: '3rd_kong',
        key: '3rd_kong',
        to: '/3rd_kong',
      },
      {
        title: '4th_kong',
        key: '4th_kong',
        to: '/4th_kong',
      }
    ]
  }
]

export default menuList
