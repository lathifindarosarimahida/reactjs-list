import React, { Component } from 'react'
import $ from "jquery";

class Agenda extends Component {
    constructor(){  
        super();  
        this.state = {  
            agenda : [  
                {
                    no: 1,
                    tanggal: "10 JANUARI",
                    kegiatan: "Hari Perencanaan Gerakan 1 Juta Pohon"
                },  

                {
                    no: 2,
                    tanggal: "2 FEBRUARI",
                    kegiatan: "Hari Lahan Basah Se Dunia"
                }, 

                {
                    no: 3,
                    tanggal: "21 FEBRUARI",
                    kegiatan: "Hari Peduli Sampah Nasional"
                },  
                {
                    no: 4,
                    tanggal: "6 Maret",
                    kegiatan: "Hari Strategi konservasi Se Dunia"
                }, 

                {
                    no: 5,
                    tanggal: "16 Maret",
                    kegiatan: "Hari Bhakti Rimbawan"
                },

                {
                    no: 6,
                    tanggal: "20 Maret",
                    kegiatan: "Hari Kehutanan Sedunia"
                },
                {
                    no: 7,
                    tanggal: "21 Maret",
                    kegiatan: "Hari Hutan Internasional"
                },
                {
                    no: 8,
                    tanggal: "22 Maret",
                    kegiatan: "Hari Air Sedunia"
                },

                {
                    no: 9,
                    tanggal: "23 Maret",
                    kegiatan: "Hari Meteorologi"
                },
                {
                    no: 10,
                    tanggal: "22 April",
                    kegiatan: "Hari Bumi"
                },
                {
                    no: 11,
                    tanggal: "21 Mei",
                    kegiatan: "Hari Keanekaragaman Hayati"
                },
                {
                    no: 12,
                    tanggal: "5 Juni",
                    kegiatan: "Hari Lingkungan Hidup Sedunia"
                },
                {
                    no: 13,
                    tanggal: "17 Juni",
                    kegiatan: "Hari Penanggulangan Degradasi Lahan dan Kekeringan Se Dunia"
                },
                {
                    no: 14,
                    tanggal: "10 Agustus",
                    kegiatan: "Hari Konservasi Alam Nasional"
                },
                {
                    no: 15,
                    tanggal: "16 September",
                    kegiatan: "Hari Ozon Internasional"
                },
                {
                    no: 16,
                    tanggal: "6 Oktober",
                    kegiatan: "Hari Habitat Se Dunia"
                },
                {
                    no: 17,
                    tanggal: "16 Oktober",
                    kegiatan: "Hari Pangan Se Dunia"
                },
                {
                    no: 18,
                    tanggal: "5 November",
                    kegiatan: "Hari Cinta Puspa dan Satwa Nasional"
                },
                {
                    no: 19,
                    tanggal: "28 November",
                    kegiatan: "HMPI dan BMN"
                },
                {
                    no: 20,
                    tanggal: "4 Desember",
                    kegiatan: "Hari Konservasi Ken Liar Se Dunia"
                },
            ],  

            no: 0,  
            tanggal: "",  
            kegiatan: "",
            action: "" 
        }  
    }  

    bind = (event) => {  
        this.setState({[event.target.name]: event.target.value});  
    }
    
    Edit = (item) => {  
        this.setState({    
            no: item.no, 
            tanggal: item.tanggal,  
            kegiatan: item.kegiatan,  
            action: "update"  
        });  
    }  

    Drop = (index) => {  
        let temp = this.state.agenda;    
        temp.splice(index,1);   
        this.setState({agenda: temp});  
    }  
    
    Add = () => {  
        let angka = this.state.agenda;
        let angkaupdate = angka.length;
        this.setState({  
            no: ++angkaupdate,  
            tanggal: "",  
            kegiatan: "",
            action: "insert" 
        });  
    }  

    SaveAgenda = (event) =>{  
        event.preventDefault();  
        let temp = this.state.agenda;  
        
        if (this.state.action === "insert") {  
            temp.push({  
                no: this.state.no,  
                tanggal: this.state.tanggal,  
                kegiatan: this.state.kegiatan  
            });  
        } else if (this.state.action === "update") {  
            let index = temp.findIndex(item => item.no === this.state.no);  
            temp[index].tanggal = this.state.tanggal;  
            temp[index].kegiatan = this.state.kegiatan;  
        }  
        
            this.setState({agenda: temp});  
        
        $("#modal").modal('hide');  
    }  

    render() {
        return (
            <header class="header">
                <div class="title">
                    <h1>AGENDA</h1>
                </div>
                <br />
                <br />
                <br />
                <br />


            <div className="container page-top">
                <table className="table table-striped table-dark">
                    <tbody>
                        <tr>
                            <th width="24" scope="col">NO</th>
                            <th width="92" scope="col">TANGGAL</th>
                            <th width="247" scope="col">KEGIATAN</th>
                            <th width="24" scope="col">AKSI</th>
                        </tr>
                        {this.state.agenda.map((item,index) => {  
                            return (  
                                <tr>
                                    <th scope="row">{item.no}</th>
                                    <td>{item.tanggal}</td>
                                    <td>{item.kegiatan} </td>
                                    <td>
                                        <button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)} data-toggle="modal" data-target="#modal">  
                                            Edit  
                                        </button>  
                                        <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>  
                                            Hapus  
                                        </button>  
                                    </td>
                                </tr>
                            );  
                        })}
                    </tbody>
                </table>
                
                <button className="btn btn-success" onClick={this.Add} data-toggle="modal" data-target="#modal">  
                    Tambah Data  
                </button>  
                <br></br><br></br>

                { /* elemen form modal */ }  
                <div className="modal fade" id="modal">  
                    <div className="modal-dialog">  
                        <div className="modal-content">  
                            <div className="modal-header bg-info text-white">  
                                <h5>Form Agenda</h5>  
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>  
                            <form onSubmit={this.SaveAgenda}>  
                                <div className="modal-body">  
                                    Tanggal  
                                    <input type="text" name="tanggal" className="form-control" onChange={this.bind}  
                                    value={this.state.tanggal} />  
                                    Kegiatan  
                                    <input type="text" name="kegiatan" className="form-control" onChange={this.bind}  
                                    value={this.state.kegiatan} />  
                                </div>  
                                <div className="modal-footer">  
                                    <button type="submit" className="btn btn-primary">  
                                    Simpan  
                                    </button>  
                                </div>  
                            </form>  
                        </div>  
                    </div>  
                </div>  
                <br></br><br></br>
            </div>
        </header>
        )
    }
}

export default Agenda;