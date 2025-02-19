import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-6 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold">Produtos</h1>

      <section className="flex items-center justify-between">
        <form className="flex items-center gap-2">
          <Input name="id" placeholder="Id do produto" className="w-auto" />
          <Input name="name" placeholder="Name do produto" className="w-auto" />
          <Button type="submit" variant="link">
            <Search className="w-4 h-4 mr-2" />
            Filtrar 
          </Button>
        </form>

        <Dialog>
          <DialogTrigger asChild>
            <Button>Novo Produto</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo produto</DialogTitle>
              <DialogDescription>Criar um novo produto</DialogDescription>
            </DialogHeader>
            <form className="space-y-6">

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="name">Produto</Label>
                <Input className="col-span-3" id="name" />
              </div>

              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="valor">Preço</Label>
                <Input className="col-span-3" id="valor" />
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant={"outline"}>Cancelar</Button>
                </DialogClose>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </section>

      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Preço</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, i) => <TableRow key={i}>
              <TableCell>{i}</TableCell>
              <TableCell>Produto {i}</TableCell>
              <TableCell>R$ 123,25</TableCell>
            </TableRow>)}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
