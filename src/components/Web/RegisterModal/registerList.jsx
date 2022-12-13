import { set } from "lodash";
import React, { useState, useEffect } from "react";
import { date } from "yup";
import { Auth, User, ListDate } from "../../../api";
import "./registerList.css";
import Swal from 'sweetalert2'


const authController = new Auth();
const userController = new User();
const apidays = new ListDate();

export function RegisterList({
  setStyleDisplay,
  fulltime,
  setFulltime,
  setLsitafternoon,
  lsitafternoon,
  setListmornign,
  listmornign,
  day,
  floor,
}) {
  const [shedule, setShedule] = useState("fulltime");
  const [type, setType] = useState("work");
  const [updateList, setupdateList] = useState([]);

  const [user, setUser] = useState("");

  useEffect(() => {
    const userName = async () => {
      try {
        let accessToken = authController.getAccessToken();

        const response = await userController.getMe(accessToken);
        delete response.password;

        setUser(response);
      } catch (error) {
        console.error(error);
      }
    };

    userName();
  }, []);

  const showhide = () => {
    setStyleDisplay("none");
  };

  const selected = (selector) => {
    console.log(selector.target.value);

    selector.target.getAttribute("class").search(/shedule/) > -1
      ? setShedule(selector.target.value)
      : setType(selector.target.value);
  };

  const registerButton = () => {
    switch (shedule) {
      case "fulltime":
        let templist = [...fulltime];
        templist.push({
          email: user.email,
          type: type,
          shedule: shedule,
          confirmation: "false",
          floor: floor,
        });
        setFulltime(templist);
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso!'  
        })
        showhide();
        break;

      case "morning":
        let templistmornign = [...listmornign];
        templistmornign.push({
          email: user.email,
          type: type,
          shedule: shedule,
          confirmation: "false",
          floor: floor,
        });
        setListmornign(templistmornign);
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso!'  
        })
        showhide();
        break;

      case "afternoon":
        let tempafternoon = [...lsitafternoon];
        tempafternoon.push({
          email: user.email,
          type: type,
          shedule: shedule,
          confirmation: "false",
          floor: floor,
        });
        setLsitafternoon(tempafternoon);
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso!'  
        })
        showhide();
        break;

      default:
        break;
    }

    apidays.getDay(day).then((response) => {
      let tempUserList = response.userList;
      tempUserList.push({
        email: user.email,
        type: type,
        shedule: shedule,
        confirmation: "false",
        floor: floor,
      });
      apidays.update(day, tempUserList);
    });
  };

  //   useEffect(() => {
  //     //setTimeout(() => {

  // console.log(fulltime)
  // console.log(lsitafternoon)
  // console.log(listmornign)

  //       let tempUserList = [...lsitafternoon];
  //       tempUserList.push(listmornign);
  //       tempUserList = tempUserList.flat()
  //       setupdateList(tempUserList);

  //       if (tempUserList.length != 0) {
  //         console.log(updateList);
  //         apidays.update(day, tempUserList);
  //       }
  //     //}, 500);
  //   }, [fulltime,listmornign,lsitafternoon]);

  return (
    <div className="container-modal">
      <div className="modal-content">
        <span
          className="close"
          onClick={() => {
            showhide();
          }}
        >
          &times;
        </span>
        <div class="modal__title">Register your asistance</div>
        <div className="lineBreak"></div>

        <div className="Form">
          <div className="modal__shedule">
          <label>Shedule: </label>
          <div className="select-dropdown">
            <select
              className="shedule"
              onClick={() => {
                selected(event);
              }}
            >
              <option value="fulltime">Full Time</option>
              <option value="morning">Part Time Morning</option>
              <option value="afternoon">Part Time Afternoon</option>
            </select>
          </div>
          </div>
          <div className="lineBreak"></div>

          <div className="modal__shedule">
          <label>Type: </label>
          <div className="select-dropdown">
            <select
              className="type"
              onClick={() => {
                selected(event);
              }}
            >
              <option value="work">Work</option>
              <option value="visit">Visit</option>
              <option value="event">Event</option>
              <option value="other">Other</option>
            </select>
          </div>
              </div>
          <div className="lineBreak"></div>

          <div className="modal__buttons">
          <button
            className="registerButton"
            onClick={() => {
              registerButton();
            }}
          >
            Register
          </button>
          <button className="registerButton">Show List</button>
          </div>
        </div>
      </div>
    </div>
  );
}
