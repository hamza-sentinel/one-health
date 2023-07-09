import Button from "../utils/Button";
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
      <Button className="w-fit px-4 py-2 rounded-r-md text-white" type="submit">
        <FaSearch />
      </Button>
    </form>
  );
}

export default SearchBox;
