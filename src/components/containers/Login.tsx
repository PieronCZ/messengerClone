import { Typography } from "@mui/material";
import { FC } from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";

export const Login: FC = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <Typography variant="h4">Welcome to Unichat!</Typography>

                <div className="login-button google">
                    <GoogleOutlined /> Sign in with Google
                </div>

                <br /> <br />

                <div className="login-button facebook">
                    <FacebookOutlined /> Sign in with Facebook
                </div>
            </div>
        </div>
        )
}
