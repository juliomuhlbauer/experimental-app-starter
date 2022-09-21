import { Layout } from "@/layout";
import { state } from "@/store/state";
import { NextPageWithLayout } from "@/types/next";
import { Button, Heading, Input, useColorMode } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { useSnapshot } from "valtio";

const Home: NextPageWithLayout = () => {
  const stateSnap = useSnapshot(state);

  const teste = useState("teste");

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Heading>App Starter Kit</Heading>

      <MyInput state={teste} />

      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>

      <Button
        onClick={() => {
          ++state.count;
        }}
      >
        {stateSnap.count}
      </Button>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;

const MyInput: FC<{ state: [string, Dispatch<SetStateAction<string>>] }> = ({
  state,
}) => {
  return <Input value={state[0]} onChange={(e) => state[1](e.target.value)} />;
};
