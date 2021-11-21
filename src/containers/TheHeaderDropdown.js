/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import userActions from "src/store/actions/userActions";

const TheHeaderDropdown = () => {
  const dispatch = useDispatch();
  const rd_user = useSelector((state) => state.userReducer);
  const autentica = useAuth();
  const token = sessionStorage.getItem("token");

  const logout_nav = () => {
    autentica.fn_logout();
  };

  useEffect(() => {
    if (token) {
      dispatch(userActions.index_user(token));
    }
  }, []);

  console.log(rd_user);

  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        {/* <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div> */}
        <div>{rd_user?.index?.username}</div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Account</strong>
        </CDropdownItem>

        <CDropdownItem>
          <Link to="/alterar-senha" style={{ color: "#8a93a2" }}>
            {" "}
            <CIcon name="cil-user" className="mfe-2" />
            Alterar Senha{" "}
          </Link>
        </CDropdownItem>

        <CDropdownItem divider />
        <CDropdownItem onClick={logout_nav}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Sair
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
