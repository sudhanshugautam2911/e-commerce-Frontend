import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectLoggedInUser } from "../authSlice";
import { selectUserInfo } from "../../user/userSlice";

function ProtectedAdmin({children}) {
  const user = useSelector(selectLoggedInUser);
  const userInfo = useSelector(selectUserInfo);
    if (!user) {
        return <Navigate to='/login' replace={true}></Navigate>
    }
    // diff between code
    if (userInfo && userInfo.role !== 'admin') {
        alert("You are not Admin, Please login with your Admin id");
        return <Navigate to='/' replace={true}></Navigate>
    }
    return children;
}

export default ProtectedAdmin;