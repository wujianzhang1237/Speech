/*
Copyright (C): 2010-2019, Shenzhen Yahboom Tech
modified from wujianzhang
load dependency
"Speech": "file:../pxt-Speech"
*/

//% color="#006400" weight=20 icon="\uf170"
namespace Speech {
    const I2C_ADDR = 0x50                   //语音模块地址

    
    const DELAY  = 150;//I2C之间延时间隔ms

    export enum EncodingFormat_Type{
        //% blockId="GB2312" block="GB2312"
        GB2312 = 0x00,
        //% blockId="GBK" block="GBK"  
        GBK = 0x01,
        //% blockId="BIG5" block="BIG5"        
        BIG5 = 0x02,
        //% blockId="UNICODE" block="UNICODE"        
        UNICODE = 0x03
    }


    function IIC_Writes(date: number[], size: number): void {

        for(let i =0;i<size;i++)
        {
            pins.i2cWriteNumber(I2C_ADDR, date[i], NumberFormat.UInt8LE, false);
            basic.pause(10);
        }
    }

    //% blockId=Speech_Text block="Speech_Text|EncodingFormat %EncodingFormat|speech_text %speech_text"
    //% weight=99
    //% blockGap=10
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12  
    export function Speech_Text(EncodingFormat: EncodingFormat_Type,speech_text: string): void {
        let num = speech_text.length + 2;
        let total_num = speech_text.length;
        let length_HH= num >> 8;
        let length_LL = num & 0xff;
        let commond = 0x01;

        let buf:num[] = [0xFD,length_HH,length_LL,commond,EncodingFormat]; 
        
        IIC_Writes(buf,5);

        
        for(let i =0;i<total_num;i++)
        {
             
            pins.i2cWriteNumber(I2C_ADDR,speech_text.charCodeAt(i), NumberFormat.UInt8LE, false);
        }
        
        //pins.i2cWriteBuffer(I2C_ADDR, buf);
        

    }




    export enum Style_Type{
        //% blockId="Style_Single" block="Style_Single"
        Style_Single = 0,
        //% blockId="Style_Continue" block="Style_Continue"
        Style_Continue = 1
    }

    export enum Language_Type {

        //% blockId="Language_Auto" block="Language_Auto"
        Language_Auto = 0,
        //% blockId="Language_Chinese" block="Language_Chinese"
        Language_Chinese,
        //% blockId="Language_English" block="Language_English"
        Language_English
    }

    export enum Articulation_Type {

        //% blockId="Articulation_Auto" block="Articulation_Auto"
        Articulation_Auto = 0,
        //% blockId="Articulation_Letter" block="Articulation_Letter"
        Articulation_Letter,
        //% blockId="Articulation_Word" block="Articulation_Word"
        Articulation_Word
    }

    export enum SetSpell {

        //% blockId="Spell_Disable" block="Spell_Disable"
        Spell_Disable = 0,
        //% blockId="Spell_Enable" block="Spell_Enable"
        Spell_Enable
    }

    export enum Reader_Type {

        //% blockId="Reader_XiaoYan" block="Reader_XiaoYan"
        Reader_XiaoYan = 3,
        //% blockId="Reader_XuJiu" block="Reader_XuJiu"
        Reader_XuJiu = 51,
        //% blockId="Reader_XuDuo" block="Reader_XuDuo"
        Reader_XuDuo = 52,
        //% blockId="Reader_XiaoPing" block="Reader_XiaoPing"
        Reader_XiaoPing = 53,
        //% blockId="Reader_DonaldDuck" block="Reader_DonaldDuck"
        Reader_DonaldDuck = 54,
        //% blockId="Reader_XuXiaoBao" block="Reader_XuXiaoBao"
        Reader_XuXiaoBao = 55
    }

    export enum NumberHandle_Type {

        //% blockId="NumberHandle_Auto" block="NumberHandle_Auto"
        NumberHandle_Auto = 0,
        //% blockId="NumberHandle_Number" block="NumberHandle_Number"
        NumberHandle_Number,
        //% blockId="NumberHandle_Value" block="NumberHandle_Value"
        NumberHandle_Value
    }

    export enum ZeroPronunciation_Type {

        //% blockId="ZeroPronunciation_Zero" block="ZeroPronunciation_Zero"
        ZeroPronunciation_Zero = 0,
        //% blockId="ZeroPronunciation_O" block="ZeroPronunciation_O"
        ZeroPronunciation_O
    }

    export enum PromptTone_Type {

        //% blockId="PromptTone_Disable" block="PromptTone_Disable"
        PromptTone_Disable = 0,
        //% blockId="PromptTone_Enable" block="PromptTone_Enable"
        PromptTone_Enable
    }

    export enum OnePronunciation_Type {

        //% blockId="OnePronunciation_Yao" block="OnePronunciation_Yao"
        OnePronunciation_Yao = 0,
        //% blockId="OnePronunciation_Yi" block="OnePronunciation_Yi"
        OnePronunciation_Yi
    }
    
    export enum Rhythm_Type {

        //% blockId="Rhythm_Diasble" block="Rhythm_Diasble"
        Rhythm_Diasble = 0,
        //% blockId="Rhythm_Enable" block="Rhythm_Enable"
        Rhythm_Enable
    }

    export enum ConstraintSpell_Type {
        //% blockId="ConstraintSpell_YinPing" block="ConstraintSpell_YinPing"
        ConstraintSpell_YinPing = 0,
        //% blockId="ConstraintSpell_YangPing" block="ConstraintSpell_YangPing"
        ConstraintSpell_YangPing,
        //% blockId="ConstraintSpell_ShangSheng" block="ConstraintSpell_ShangSheng"
        ConstraintSpell_ShangSheng,
        //% blockId="ConstraintSpell_QuSheng" block="ConstraintSpell_QuSheng"
        ConstraintSpell_QuSheng,
        //% blockId="ConstraintSpell_QingSheng" block="ConstraintSpell_QingSheng"
        ConstraintSpell_QingSheng
    } 

 
}
