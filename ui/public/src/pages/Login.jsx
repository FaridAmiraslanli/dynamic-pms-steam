// import { Button, IconBtn, LinkBtn, LongBtn } from "../components/MuiButtons";
// import {LongBtn} from "../components/buttons/LongBtn";

import { ActionBtn } from "../components/buttons/ActionBtn";
import { IconBtn } from "../components/buttons/IconBtn";
import { LinkBtn } from "../components/buttons/LinkBtn";
import { LongBtn } from "../components/buttons/LongBtn";


function Login() {
  return (
    <div>
      <LongBtn className="long-gray" text="hello" />
      <LongBtn className="long-green-1" text="hello" />
      <LongBtn className="long-green-2" text="hello" />
      <LongBtn className="outlined-green" text="hello" />
      <IconBtn icon="facebook" />
      <IconBtn icon="google" />
      <IconBtn icon="apple" />
      <LinkBtn text="asd" />
      <ActionBtn w="400" h="40" radius="10" text={"asdsa"} />
      {/* <Button text="btn" className="default-gray" />
      <Button text="btn" className="default-green-1" />
      <Button text="btn" className="default-green-2" />
      <Button text="btn" className="outlined-green" /> */}
      {/* <LongBtn text={"Hello world"} bg="green" /> */}
      {/* <IconBtn icon="google" />
      <IconBtn icon="facebook" />
      <IconBtn icon="apple" />
      <LinkBtn text="link btn" /> */}
    </div>
  );
}

export default Login;
