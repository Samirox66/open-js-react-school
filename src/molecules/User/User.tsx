import Css from "./User.module.css";
import { useGetUserByIdQuery } from "../../app/apis/usersApi";
import { Error, Loader } from "../../atoms";

interface UserProps {
    userId?: number;
}

export default function User({ userId }: UserProps) {
    const {
        isLoading: isUserLoading,
        data: user,
        isError,
    } = useGetUserByIdQuery(userId);

    if (isUserLoading) return <Loader isLoading={isUserLoading} />;

    if (isError)
        return (
            <Error isError={isError}>
                Error loading user, try to reload page
            </Error>
        );

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
