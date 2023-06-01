import React, { Fragment, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonContactUs from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { NotificationData } from '../data/notification-data';

const FormNotification = () => {

    const { formikNotification } = useContext(NotificationData)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const useStyleBtnContactUs = {
        btn: {
            backgroundColor: "floralwhite",
            color: 'red',
            textTransform: "capitalize",
            '&:hover': {
                backgroundColor: "red",
                color: "floralwhite"
            },
        }
    }

    return (
        <Fragment>
            <div className='d-flex my-3 justify-content-center'>
                <ButtonContactUs className="fs-5"
                    onClick={handleShow}
                    sx={useStyleBtnContactUs.btn}>
                    Contact Us
                </ButtonContactUs>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formikNotification.handleSubmit}>
                        {/* Email input field */}
                        <Form.Group className={`mb-3 ${formikNotification.touched.email
                            && formikNotification.errors.email
                            ? "text-danger"
                            : ""}`}>
                            <Form.Label htmlFor="email">
                                {formikNotification.touched.email
                                    && formikNotification.errors.email
                                    ? formikNotification.errors.email
                                    : "Contact Email"
                                }
                            </Form.Label>
                            <Form.Control
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                // autoFocus
                                value={formikNotification.values.email}
                                onChange={formikNotification.handleChange}
                                onBlur={formikNotification.handleBlur}
                            />
                        </Form.Group>
                        {/* Subject input field */}
                        <Form.Group className={`mb-3 ${formikNotification.touched.subject
                            && formikNotification.errors.subject
                            ? "text-danger"
                            : ""}`}>
                            <Form.Label htmlFor="subject">
                                {formikNotification.touched.subject
                                    && formikNotification.errors.subject
                                    ? formikNotification.errors.subject
                                    : "Subject"
                                }
                            </Form.Label>
                            <Form.Control
                                id="subject"
                                type="text"
                                name="subject"
                                placeholder="Enter your subject"
                                value={formikNotification.values.subject}
                                onChange={formikNotification.handleChange}
                                onBlur={formikNotification.handleBlur}
                            />
                        </Form.Group>
                        {/* Notification input field */}
                        <Form.Group className={`mb-3 ${formikNotification.touched.notification
                            && formikNotification.errors.notification
                            ? "text-danger"
                            : ""}`}>
                            <Form.Label htmlFor="notification">
                                {formikNotification.touched.notification
                                    && formikNotification.errors.notification
                                    ? formikNotification.errors.notification
                                    : "Email Content"
                                }
                            </Form.Label>
                            <Form.Control as="textarea" rows={3}
                                id="notification"
                                type="text"
                                name="notification"
                                placeholder="Enter your notification"
                                value={formikNotification.values.notification}
                                onChange={formikNotification.handleChange}
                                onBlur={formikNotification.handleBlur}
                            />
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" type="submit">
                                Send
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}

export { FormNotification };