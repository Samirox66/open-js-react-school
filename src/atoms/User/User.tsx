import { useParams } from "react-router-dom";
import Css from "./User.module.css";
import { useGetUserByIdQuery } from "../../app/apis/usersApi";

export default function User() {
    const { id } = useParams();

    const { isLoading: isUserLoading, data: user } = useGetUserByIdQuery(id);

    if (isUserLoading) return <p>Loading...</p>;

    return (
        <div className={Css.user}>
            <img className={Css.image} src={user?.image} />
            <div className={Css.nameContainer}>
                <p className={Css.writtenBy}>Written by</p>
                <p
                    className={Css.userName}
                >{`${user?.firstName} ${user?.lastName}`}</p>
            </div>
        </div>
    );
}
