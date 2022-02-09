import React from "react";
import jwt from 'jwt-decode';
import {storage} from "../firebase/firebase";

export function getDate(timestamp) {
  const date = new Date(timestamp);
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
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

export const getRoleCurrent = (token) => {
  if (token != null) {
    const parse = jwt(token);
    return parse.role;
  }
  return null;
}

export const getMemberIdCurrent = (token) => {
  if (token != null) {
    const parse = jwt(token);
    return parse.member_id;
  }
  return null;
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

export function uploadImage(blob, name, folder) {
  storage.ref(folder + "/" + name).put(blob);
}
