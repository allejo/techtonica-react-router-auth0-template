import { useAuth0 } from "@auth0/auth0-react";
import { Alert } from "react-bootstrap";

const Profile = () => {
    const { isAuthenticated, user } = useAuth0();

    // If the user is not logged in, display a warning message.
    if (!isAuthenticated) {
        return (
            <div>
                <Alert variant="warning">
                    This page requires you to be logged in before you can access it.
                </Alert>
            </div>
        );
    }

    return (
        <div>
            <h1>Profile Account</h1>

            <dl>
                <dt>Name</dt>
                <dd>{user.given_name} {user.family_name}</dd>

                <dt>Email</dt>
                <dd>{user.email}</dd>
            </dl>
        </div>
    );
};

export default Profile;
