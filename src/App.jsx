import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { logout } from "./app/features/user/userSlice";
import router from "./router/router";
import TokenService from "./services/token.service";

function App() {
	const user = TokenService.getUser() || null;
	const dispatch = useDispatch();
	if (user) {
		if (dayjs.unix(user.RefreshTokenExpiresUtc).diff(dayjs()) < 1) {
			dispatch(logout());
		}
	}
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
