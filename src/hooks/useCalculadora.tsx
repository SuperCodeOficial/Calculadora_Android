import React, { useRef, useState } from 'react';

enum Operadores{
    sumar, restar, multiplicar, dividir
  }
export const useCalculadora = () => {
    const [numeroAnterior, setnumeroAnterior] = useState('0');
    const [numero, setnumero] = useState('0');
    const ultimaOperacion = useRef<Operadores>();

    const limpiar = ()=>{
        setnumero('0');
        setnumeroAnterior('0');
    }
    const armarNumero = (numeroTexto: String)=>
        {
            if(numero.includes('.')&& numeroTexto === '.')return;
            if(numero.startsWith('0') || numero.startsWith('-0') )
            {
                if(numeroTexto === '.')
                {
                    setnumero(numero + numeroTexto)
                } 
                else if(numeroTexto === '0' && numero.includes('.'))
                {
                    setnumero(numero + numeroTexto)
                }
                else if(numeroTexto !== '0' && !numero.includes('.'))
                {
                    setnumero(numeroTexto)
                }
                else if(numeroTexto === '0' && !numero.includes('.'))
                {
                    setnumero(numero)
                }
                else
                {
                    setnumero(numero + numeroTexto)
                }
            }
            else
            {
                setnumero(numero + numeroTexto)
            }
        }
    const positivoNegativo = ()=>{
        if(numero.includes('-')){
          setnumero(numero.replace('-', ''))
        }else{
          setnumero('-' + numero)
        }
    }
    const btnDelete = () =>{
      let negativo= '';
      let numeroTemp = numero;
        if(numero.includes('-')){
          negativo
          numeroTemp = numero.substring(1)
        }
        if(numeroTemp.length > 1){
          setnumero(numeroTemp.slice(0,-1))
        }else{
          setnumero('0')
        }
    }
    const cambiarNumeroporAnterior = () => {
        if(numero.endsWith('.')){
            setnumeroAnterior(numero.slice(0,-1));
      }else{
        setnumeroAnterior(numero)
      }
      setnumero('0')
    }
    
    const btnDividir = () => {
      cambiarNumeroporAnterior()
      ultimaOperacion.current=Operadores.dividir
    } 
    
    const btnMultiplicar = () => {
      cambiarNumeroporAnterior()
      ultimaOperacion.current=Operadores.multiplicar
    }
    
    const btnSumar = () => {
      cambiarNumeroporAnterior()
      ultimaOperacion.current=Operadores.sumar
    } 
    
    const btnRestar = () => {
      cambiarNumeroporAnterior()
      ultimaOperacion.current=Operadores.restar
    } 
    
    const calcular = () => {
      const num1 = Number(numero)
      const num2 = Number(numeroAnterior)
      switch (ultimaOperacion.current) {
        case Operadores.sumar:
          setnumero(`${num1 + num2}`);
          break;
          case Operadores.restar:
            setnumero(`${num2 - num1}`);
            break;
            case Operadores.multiplicar:
          setnumero(`${num1 * num2}`);
          break;
          case Operadores.dividir:
          setnumero(`${num2 / num1}`);
          break;
        default:
          break;
      }
      setnumeroAnterior('0');
    }

    return{
        numero,
        numeroAnterior,
        positivoNegativo,
        limpiar,
        btnDividir, 
        btnMultiplicar,
        btnRestar,
        btnSumar,
        armarNumero,
        calcular,
        btnDelete,
    }
    
};
