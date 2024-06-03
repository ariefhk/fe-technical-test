import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PropTypes from "prop-types"

export default function CheckListInput({
  signOut,
  checklist,
  onCreateCheckList,
  handleCheckList,
}) {
  return (
    <div className="grid gap-2">
      <div className="flex justify-between items-center">
        <Label htmlFor="email" className="text-2xl font-bold">
          Tambah Cheklist
        </Label>
        <Button onClick={() => signOut()}>Keluar</Button>
      </div>
      <div className="space-y-2">
        <Input
          value={checklist}
          onChange={(e) => handleCheckList(e.target.value)}
          id="email"
          type="text"
          placeholder="Tambah Checklist"
          required
        />
        <Button
          onClick={() => onCreateCheckList()}
          variant="outline"
          className="w-full">
          Tambah Checklist
        </Button>
      </div>
    </div>
  )
}

CheckListInput.propTypes = {
  signOut: PropTypes.func,
  checklist: PropTypes.string,
  onCreateCheckList: PropTypes.func,
  handleCheckList: PropTypes.func,
}
