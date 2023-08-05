import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import Container from "../Container/Container";
import {
  deleteShortUrl,
  getAllUrl,
  getNewShortUrl,
} from "../../services/ApiData";
import UrlList from "../UrlList/UrlList";
import { Item } from "../../services/interfaces";
import Footer from "../Footer/Footer";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  async function fetchData() {
    const result = await getAllUrl();
    setItems(result.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const createNewItem = async (originalUrl: string) => {
    await getNewShortUrl({ originalUrl });
    await fetchData();
  };

  const deleteById = async (id: number) => {
    await deleteShortUrl(id);
    await fetchData();
  };
  return (
    <>
      <Container>
        <Form createNewItem={createNewItem} />
        <UrlList items={items} deleteById={deleteById} />
        <Footer />
      </Container>
    </>
  );
}

export default App;
