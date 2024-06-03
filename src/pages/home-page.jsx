import CheckListInput from "@/components/checklist/checklist-input"
import CheckListList from "@/components/checklist/checklist-list"
import { useToast } from "@/components/ui/use-toast"
import ProtectedLayout from "@/layouts/protected-layout"
import { useCreateCheckMutation } from "@/store/api-slices/check-api-slice"
import {
  useCreateCheckListMutation,
  useDeleteCheckListMutation,
  useGetAllCheckListQuery,
} from "@/store/api-slices/checklist-api-slice"
import { clearToken } from "@/store/slices/auth-slice"
import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"

export default function HomePage() {
  const dispatch = useDispatch()
  const { toast } = useToast()
  const [createCheckList] = useCreateCheckListMutation()
  const [deleteCheckList] = useDeleteCheckListMutation()
  const [createCheck] = useCreateCheckMutation()
  const [checkInputs, setCheckInputs] = useState({})
  const [check, setCheck] = useState("")

  const {
    data: checklists,
    isLoading: isLoadingCheckList,
    isSuccess: isSuccessChecklist,
  } = useGetAllCheckListQuery()

  const onDeleteCheckList = async (idCheckList) => {
    try {
      const hapusChecklist = await deleteCheckList({
        id: idCheckList,
      }).unwrap()
      console.log("hapus checklists: ", hapusChecklist)
      toast({
        title: "Berhasil Hapus Checklist!",
        description: `Selamat, Anda berhasil menghapus checklists`,
      })
    } catch (error) {
      console.log("GAGAL DELETE CHECK: ", error)
      toast({
        variant: "destructive",
        title: "Gagal Hapus Checklist!",
        description: `Anda gagal hapus Checklist!`,
      })
    }
  }

  const onCreateCheck = async (checkListId) => {
    try {
      const value = checkInputs[checkListId]
      await createCheck({
        checkListId,
        itemName: value,
      }).unwrap()
      toast({
        title: "Berhasil Create Check!",
        description: `Selamat, Anda berhasil buat check`,
      })
      setCheckInputs((prev) => ({ ...prev, [checkListId]: "" }))
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Gagal Hapus Check!",
        description: `Anda gagal hapus Check!`,
      })
    }
  }

  const onCreateCheckList = async () => {
    try {
      await createCheckList({
        name: check,
      }).unwrap()
      toast({
        title: "Berhasil Tambah Checklist!",
        description: `Selamat, Anda berhasil menambah checklists`,
      })
      setCheck("")
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Gagal Tambah Checklist!",
        description: `Anda gagal tambah Checklist!`,
      })
      setCheck("")
    }
  }
  const handleCheckChange = (checklistId, value) => {
    setCheckInputs((prev) => ({ ...prev, [checklistId]: value }))
  }

  const signOut = useCallback(() => {
    dispatch(clearToken())
  }, [dispatch])

  return (
    <ProtectedLayout className="space-y-10  p-5 w-screen  h-screen max-w-[500px] mx-auto">
      <CheckListInput
        checklist={check}
        handleCheckList={setCheck}
        onCreateCheckList={onCreateCheckList}
        signOut={signOut}
      />
      <CheckListList
        checklists={checklists}
        isLoadingCheckList={isLoadingCheckList}
        isSuccessChecklist={isSuccessChecklist}
        onCreateCheck={onCreateCheck}
        onDeleteCheckList={onDeleteCheckList}
        checkInputs={checkInputs}
        handleCheckChange={handleCheckChange}
      />
    </ProtectedLayout>
  )
}
