import React from 'react'
import AddSkillsModal from './AddSkillsModal'
import DeleteSkillModal from './DeleteSkillModal'
import EditSkillModal from './EditSkillModal'
import CancelCompModal from './CancelCompModal'
import AcceptCompModal from './AcceptCompModal'

const AdminModals = () => {
    return (
        <div>
            <AddSkillsModal />
            <DeleteSkillModal />
            <EditSkillModal />
            <CancelCompModal />
            <AcceptCompModal />
        </div>
    )
}

export default AdminModals
