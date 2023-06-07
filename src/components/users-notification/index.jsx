import React, { Fragment, useContext } from 'react';
import { NotificationData } from '../data/notification-data';

const UsersNotification = () => {

    const { responseNotification } = useContext(NotificationData);

    return (
        <Fragment>
            <h2>Notifications</h2>
            <section>
                <ul className='mb-2 list-unstyled'>
                    <li className="mb-2 text-secondary">
                        {responseNotification?.notificationRespons}
                    </li>
                </ul>
            </section>
        </Fragment >
    );
}

export { UsersNotification };