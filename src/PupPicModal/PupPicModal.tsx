import { Modal } from '@mui/material';
import PupPicContainer from '../PupPicContainer/PupPicContainer';


interface PupPicModalProps {
  pupPic: string;
  open: boolean;
  setOpen: (openState: boolean) => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  width: '450px',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px'
};

function PupPicModal({ pupPic, open, setOpen }: PupPicModalProps) {
  return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={style}>
          <PupPicContainer pupPic={pupPic} />
        </div>
      </Modal>
  );
}

export default PupPicModal;
