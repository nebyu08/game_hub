import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId?:number;
}

function PlatFormSelector({
  onSelectedPlatform,
  selectedPlatformId
}: Props) {
  const { data, error } = usePlatforms();

  const selectedPlatform=data?.results.find(p=>p.id===selectedPlatformId )

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectedPlatform(platform)}
            key={platform.id}
          >
            {" "}
            {platform.name}{" "}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatFormSelector;
