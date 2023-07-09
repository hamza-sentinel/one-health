import Button from "../Button";
import {Input} from "@mui/base"
import { FaSearch } from 'react-icons/fa'

function SearchBox({ className, inputClass }: { className?: string; inputClass?: string}) {
  return (
    <form className={`flex justify-center w-full ${className}`}>
      <Input
        placeholder="Search..."
        slotProps={{
          input: {
            className: `w-full px-4 py-2 h-full ${inputClass} rounded-l-md`,
          },
        }}
      />
      <Button className="w-fit bg-emerald-600 px-4 py-2 rounded-r-md" type="submit">
        <FaSearch />
      </Button>
    </form>
  );
}

export default SearchBox;
