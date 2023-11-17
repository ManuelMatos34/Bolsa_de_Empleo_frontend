import React from 'react'
import AddSkillsModal from './AddSkillsModal'
import DeleteSkillModal from './DeleteSkillModal'
import EditSkillModal from './EditSkillModal'
import CancelCompModal from './CancelCompModal'
import AcceptCompModal from './AcceptCompModal'
import ConfigAdminModal from './ConfigAdminModal'

const AdminModals = () => {
    return (
        <div>
            <AddSkillsModal />
            <DeleteSkillModal />
            <EditSkillModal />
            <CancelCompModal />
            <AcceptCompModal />
            <ConfigAdminModal />
        </div>
    )
}

export default AdminModals
