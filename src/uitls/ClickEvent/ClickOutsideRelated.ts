export const handleExternalClick = (
    event: React.MouseEvent<HTMLDivElement>,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (event.target === event.currentTarget) {
      setShowModal(false); // Close the modal if the click is outside the modal
    }
  }