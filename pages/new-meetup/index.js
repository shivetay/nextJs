import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const addMeetup = (data) => {
    console.log(data);
  };
  return <NewMeetupForm onAddMeetup={addMeetup} />;
};

export default NewMeetup;
