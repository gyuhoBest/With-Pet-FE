import { useModal } from 'components/common/Modal/context/useModal';
import { usePet } from 'components/Diary/hooks/usePet';
import { useState } from 'react';
import './PetSetting.scss';
import AddPet from './AddPet/AddPet';
import ShowPet from './ShowPet/ShowPet';
import EditPet from './EditPet/EditPet';

function PetSetting() {
  const { closeModal } = useModal();
  const [isEdit, setIsEdit] = useState(false);
  const pets = usePet();
  console.log(pets);

  const handleCloseModal = () => {
    closeModal(PetSetting);
  };

  return (
    <div className="pet-setting-wrapper">
      <h3 className="title">펫 수정</h3>
      <AddPet />
      <ul className="pet-list">
        {isEdit
          ? pets.map(pet => (
              <EditPet setIsEdit={setIsEdit} pet={pet} key={pet.id} />
            ))
          : pets.map(pet => (
              <ShowPet setIsEdit={setIsEdit} pet={pet} key={pet.id} />
            ))}
      </ul>
      <div className="btn-wrapper">
        <button type="button" className="submit-btn" onClick={handleCloseModal}>
          확인
        </button>
      </div>
    </div>
  );
}

export default PetSetting;
