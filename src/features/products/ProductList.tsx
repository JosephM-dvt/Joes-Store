import type { Product } from "@/features/cart/cartTypes";

import { Link as RouterLink } from "react-router-dom";
import { useMemo, useState } from "react";
import {
  Card,
  CardBody,
  Button,
  Image,
  Select,
  SelectItem,
} from "@heroui/react";
import { Link } from "@heroui/link";

import { addToCart } from "../cart/cartSlice";

import { useProducts } from "@/hooks/useProducts";
import { useUI } from "@/context/UIContext";
import { useAppDispatch } from "@/app/hooks";

type SortOption =
  | "price-asc"
  | "price-desc"
  | "title-asc"
  | "title-desc"
  | "none";

export default function ProductList() {
  const products = useProducts();
  const dispatch = useAppDispatch();

  const [sort, setSort] = useState<SortOption>("none");
  const { search } = useUI();

  const filteredProducts = useMemo(() => {
    let result = products;

    if (search.trim()) {
      const term = search.toLowerCase();

      result = result.filter((p) => p.title.toLowerCase().includes(term));
    }

    const sorted = [...result];

    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "title-asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "none":
      default:
        break;
    }

    return sorted;
  }, [products, sort, search]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <Select
          className="sm:max-w-xs min-w-50"
          label="Sort"
          selectedKeys={[sort]}
          onSelectionChange={(keys) =>
            setSort(Array.from(keys)[0] as SortOption)
          }
        >
          <SelectItem key="none">None</SelectItem>
          <SelectItem key="price-asc">Price: Low → High</SelectItem>
          <SelectItem key="price-desc">Price: High → Low</SelectItem>
          <SelectItem key="title-asc">Name: A → Z</SelectItem>
          <SelectItem key="title-desc">Name: Z → A</SelectItem>
        </Select>
      </div>

      <p className="text-sm text-default-500">
        {filteredProducts.length} product
        {filteredProducts.length !== 1 && "s"} found
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product: Product) => (
          <Card key={product.id} className="p-4 h-full ">
            <CardBody className="flex flex-col gap-3">
              <Link as={RouterLink} className="" to={`/product/${product.id}`}>
                <Image
                  alt={product.title}
                  className="w-full h-40 object-contain"
                  src={product.image}
                />
              </Link>
              <p className="font-semibold line-clamp-2 min-h-[3rem]">
                {product.title}
              </p>

              <p className="text-primary font-bold">
                R{product.price.toFixed(2)}
              </p>
              <p className="text-sm  line-clamp-3">{product.description}</p>

              <Button
                className="mt-auto"
                color="primary"
                onPress={() => {
                  dispatch(addToCart(product));
                }}
              >
                Add to Cart
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <Card className="p-8 text-center">
          <p>No products match your search.</p>
        </Card>
      )}
    </div>
  );
}
