export const SAEC_Playfield_CLOCK_PAL  = 3546895;
export const SAEC_Playfield_CLOCK_NTSC = 3579545;


export const SAEC_Events_CYCLE_UNIT = 512;
export const SAEC_Events_CYCLE_MAX = 0x100000000 * SAEC_Events_CYCLE_UNIT;


//ORG ABFLAG_*
const SAEC_Memory_addrbank_flag_UNK = 0;
export const SAEC_Memory_addrbank_flag_RAM = 1;
export const SAEC_Memory_addrbank_flag_ROM = 2;
export const SAEC_Memory_addrbank_flag_ROMIN = 4;
export const SAEC_Memory_addrbank_flag_IO = 8;
export const SAEC_Memory_addrbank_flag_NONE = 16;
export const SAEC_Memory_addrbank_flag_SAFE = 32;
//const SAEC_Memory_addrbank_flag_INDIRECT = 64;
const SAEC_Memory_addrbank_flag_NOALLOC = 128;
//const SAEC_Memory_addrbank_flag_RTG = 256;
export const SAEC_Memory_addrbank_flag_THREADSAFE = 512;
//const SAEC_Memory_addrbank_flag_DIRECTMAP = 1024;
const SAEC_Memory_addrbank_flag_ALLOCINDIRECT = 2048;
export const SAEC_Memory_addrbank_flag_CHIPRAM = 4096;
export const SAEC_Memory_addrbank_flag_CIA = 8192;
export const SAEC_Memory_addrbank_flag_PPCIOSPACE = 16384;

const SAEC_Memory_addrbank_READ = 1;
const SAEC_Memory_addrbank_WRITE = 2;

const SAEC_Memory_banktype_FAST32 = 0; //CE_MEMBANK_FAST32
const SAEC_Memory_banktype_CHIP16 = 1; //CE_MEMBANK_CHIP16
const SAEC_Memory_banktype_CHIP32 = 2; //CE_MEMBANK_CHIP32
const SAEC_Memory_banktype_CIA  = 3;   //CE_MEMBANK_CIA
const SAEC_Memory_banktype_FAST16 = 4; //CE_MEMBANK_FAST16


export const SAEC_Video_DEF_AMIGA_WIDTH = 360; //720 / 2;
export const SAEC_Video_DEF_AMIGA_HEIGHT = 284; //568 / 2;
const SAEC_Video_MAX_AMIGA_WIDTH = 376; //752 / 2; //AMIGA_WIDTH_MAX
const SAEC_Video_MAX_AMIGA_HEIGHT = 288; //576 / 2; //AMIGA_HEIGHT_MAX

const SAEC_Video_MIN_UAE_WIDTH = 160;
const SAEC_Video_MAX_UAE_WIDTH = 3072; //max_uae_width
const SAEC_Video_MIN_UAE_HEIGHT = 128;
const SAEC_Video_MAX_UAE_HEIGHT = 2048; //max_uae_height

export const SAEC_Config_Debug_Level_Fatal = 0;
export const SAEC_Config_Debug_Level_Error = 1;
export const SAEC_Config_Debug_Level_Warn = 2;
export const SAEC_Config_Debug_Level_Info = 3;
export const SAEC_Config_Debug_Level_Log = 4;