import IntlMessages from "./IntlMessages";
import React from "react";
import jwt from 'jwt-decode';
import {Tag} from "antd";

export function getStatusV2(status) {
  if (status === null) {
    return ""
  }
  return <IntlMessages id={`admin.status.${status}`}/>
}

export function getStatusTagV2(status) {
  if (status === null) {
    return ""
  }
  switch (status) {
    case "shutdown":
    case "cancel":
      return <Tag color={"red"}><IntlMessages id={`admin.status.${status}`}/></Tag>
    case "block":
      return <Tag color={"orange"}><IntlMessages id={`admin.status.${status}`}/></Tag>
    case "create":
      return <Tag color={"blue"}><IntlMessages id={`admin.status.${status}`}/></Tag>
    case "coming":
      return <Tag color={"yellow"}><IntlMessages id={`admin.status.${status}`}/></Tag>
    default:
      return <Tag color={"green"}><IntlMessages id={`admin.status.${status}`}/></Tag>
  }
}

export function getDOW(value) {
  if (value === null) {
    return "-"
  }
  return <IntlMessages id={`admin.class.dow.${value}`}/>
}

export function getDate(timestamp) {
  const date = new Date(timestamp);
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

export function getGender(gender) {
  if (gender === null) {
    return "-"
  }
  return <IntlMessages id={`admin.user.gender.${gender}`}/>
}

function imageExists(image_url) {
  let http = new XMLHttpRequest();

  http.open('GET', image_url, false);
  http.send();

  return http.status === 200;

}

export function getImageURL(path) {
  const url = "https://firebasestorage.googleapis.com/v0/b/englishcenter-2021.appspot.com/o/images%2F" + path;
  if (imageExists(url)) {
    return url + "?alt=media";
  }
  return "";
}

export function getFileURL(path) {
  const url = "https://firebasestorage.googleapis.com/v0/b/englishcenter-2021.appspot.com/o/documents%2F" + path;
  if (imageExists(url)) {
    return url + "?alt=media";
  }
  return "";
}

export function getMoney(value) {
  return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function getRoleCurrent() {
  const token = localStorage.getItem("token");
  if (token != null) {
    const parse = jwt(token);
    return parse.role;
  }
  return null;
}

export function getMemberIdCurrent() {
  const token = localStorage.getItem("token");
  if (token != null) {
    const parse = jwt(token);
    return parse.member_id;
  }
  return null;
}

export function getStatus(status) {
  if (status === null) {
    return "-"
  }
  return <IntlMessages id={`admin.categoryCourse.table.${status}`}/>
}

export function getType(type) {
  if (type === null) {
    return "-"
  }
  return <IntlMessages id={`admin.document.type.${type}`}/>
}

export function getItemNameById(listItem, id) {
  for (let i = 0; i < listItem.length; i++) {
    if (listItem[i]._id === id) {
      return listItem[i].name;
    }
  }
  return "-";
}

export function getDateTime(timestamp) {
  const date = new Date(timestamp);
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes();
}

export function getLength(listItem) {
  return listItem.length;
}

export function getTimeOfShift(listItem, id) {
  for (let i = 0; i < listItem.length; i++) {
    if (listItem[i]._id === id) {
      return listItem[i].from + " → " + listItem[i].to;
    }
  }
  return "-";
}
