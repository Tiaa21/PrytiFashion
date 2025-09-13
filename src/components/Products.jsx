import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data"; // your product data
import Product from "./Product"; // single product card

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Products({
  cat = null,
  filters = {},
  sort = "newest",
  limit = null,
}) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let tempProducts = Array.isArray(popularProducts)
      ? [...popularProducts]
      : [];

    // --- Category filtering (forgiving singular/plural) ---
    if (cat) {
      const catLower = cat.toLowerCase();
      tempProducts = tempProducts.filter((item) => {
        const itemCat = (item.category || "").toString().toLowerCase();
        if (!itemCat) return false;
        if (itemCat === catLower) return true;
        if (itemCat + "s" === catLower) return true; // "dress" -> "dresses"
        if (catLower + "s" === itemCat) return true; // "dresses" -> "dress"
        // also allow simple contains (e.g. "women-dress" vs "dress")
        if (catLower.includes(itemCat) || itemCat.includes(catLower))
          return true;
        return false;
      });
    }

    // --- Build filter entries that have a value (skip empty values) ---
    const filterEntries = Object.entries(filters).filter(
      ([k, v]) =>
        v !== undefined && v !== null && v !== "" && v.toLowerCase() !== "all"
    );

    // --- Apply color/size (or any other) filters (case-insensitive) ---
    if (filterEntries.length > 0) {
      tempProducts = tempProducts.filter((item) => {
        return filterEntries.every(([key, value]) => {
          const rawItemValue = item[key];

          if (rawItemValue === undefined || rawItemValue === null) return false;

          // normalize filter value
          const filterVal = value.toString().trim().toLowerCase();

          // if product value is array (colors, sizes, etc.) -> match any
          if (Array.isArray(rawItemValue)) {
            return rawItemValue.some(
              (iv) => iv && iv.toString().toLowerCase() === filterVal
            );
          }

          // otherwise do a string include (case-insensitive)
          return rawItemValue.toString().toLowerCase().includes(filterVal);
        });
      });
    }

    // Sort products
    if (sort === "newest") {
      tempProducts = [...tempProducts].sort((a, b) => b.id - a.id);
    } else if (sort === "asc") {
      tempProducts = [...tempProducts].sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      tempProducts = [...tempProducts].sort((a, b) => b.price - a.price);
    }

    // --- Limit for home ---
    if (limit) {
      tempProducts = tempProducts.slice(0, limit);
    }

    setFilteredProducts(tempProducts);
  }, [cat, filters, sort, limit]);

  return (
    <Container>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item) => <Product item={item} key={item.id} />)
      ) : (
        <p
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: "20px",
            fontSize: "18px",
            color: "gray",
          }}
        >
          Product unavailable
        </p>
      )}
    </Container>
  );
}
