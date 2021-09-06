import { Button, TextField } from '@material-ui/core';
import type { NextPage } from 'next';

const SignIn: NextPage = () => {
  return (
    <div>
      <form action="/api/signin">
        <TextField label="Username" type="text" name="username" />
        <TextField label="Password" type="password" name="password" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignIn;