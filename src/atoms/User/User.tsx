import { useParams } from "react-router-dom";
import Css from "./User.module.css";
import { useGetUserByIdQuery } from "../../app/apis/usersApi";
import { Loader } from "..";

export default function User() {
    const { userId } = useParams();

    const { isLoading: isUserLoading, data: user } =
        useGetUserByIdQuery(userId);

    if (isUserLoading) return <Loader isLoading={isUserLoading} />;

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
