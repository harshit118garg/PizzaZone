import { Chip } from "@mui/material";

export default function PizzaCategoryChip({ category }: { category: string }) {
  return <Chip label={category} />;
}
