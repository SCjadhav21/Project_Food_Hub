import { Button } from "@chakra-ui/react";
export default function Pagination({ current, onChange, total }) {
  const prev = (
    <Button
      colorScheme="teal"
      variant="outline"
      disabled={current === 1}
      onClick={() => onChange(current - 1)}
    >
      PREV
    </Button>
  );
  const next = (
    <Button
      colorScheme="teal"
      variant="outline"
      disabled={current === total}
      onClick={() => onChange(current + 1)}
    >
      NEXT
    </Button>
  );

  const pages = new Array(total).fill(0).map((a, i) => (
    <Button
      colorScheme="teal"
      variant="outline"
      onClick={() => onChange(i + 1)}
      disabled={current === i + 1}
    >
      {i + 1}
    </Button>
  ));

  return (
    <div style={{ margin: "auto" ,width:"50%",padding:"40px"}}>
      {prev}
      {pages}
      {next}
    </div>
  );
}
